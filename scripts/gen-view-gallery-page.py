#!/usr/bin/env python3
"""Generate app/view/examples/<component>/page.tsx galleries.

Style B: import every registry example-*.tsx, keep unique local _examples
(including *-matrix.tsx), shell = bg-card rounded-3xl border.
"""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXAMPLES = ROOT / "registry/react/examples"
VIEWS = ROOT / "app/view/examples"

ACRONYMS = {
    "rtl": "RTL",
    "lg": "LG",
    "md": "MD",
    "sm": "SM",
    "xs": "XS",
    "xl": "XL",
    "otp": "OTP",
    "ai": "AI",
    "mcp": "MCP",
    "api": "API",
    "ui": "UI",
    "dob": "DOB",
}

ALIASES = {
    "demo": "default",
    "basic": "default",
    "horizontal-demo": "horizontal",
    "groups": "grouping",
    "scrollable": "with-scroll",
    "auto-highlight": "autohighlight",
    "clear": "with-clear-button",
    "side": "sides",
    "destructive": "variant-destructive",
    "ghost": "variant-ghost",
    "link": "variant-link",
    "outline": "variant-outline",
    "secondary": "variant-secondary",
}

SHELL = "bg-card rounded-3xl border p-6 sm:p-10"


def to_pascal(stem: str) -> str:
    return "".join(part[:1].upper() + part[1:] for part in stem.split("-"))


def to_label(stem: str) -> str:
    return " ".join(
        ACRONYMS.get(part.lower(), part[:1].upper() + part[1:])
        for part in stem.split("-")
    )


def list_examples(component: str) -> list[str]:
    directory = EXAMPLES / component
    if not directory.is_dir():
        return []
    files = [
        path.name
        for path in directory.iterdir()
        if path.is_file()
        and path.name.startswith("example-")
        and path.name.endswith(".tsx")
    ]
    return sorted(files, key=lambda name: (0 if name == "example-default.tsx" else 1, name))


def is_covered(stem: str, reg_stems: set[str], component: str) -> bool:
    if stem == "matrix":
        return False
    if stem in reg_stems:
        return True
    if component == "combobox" and stem == "groups" and "group" in reg_stems:
        return True
    if component == "select" and stem == "groups" and "grouping" in reg_stems:
        return True
    alias = ALIASES.get(stem)
    if alias and alias in reg_stems:
        return True
    if f"variant-{stem}" in reg_stems:
        return True
    return False


def local_extras(component: str) -> list[tuple[str, str, str]]:
    local_dir = VIEWS / component / "_examples"
    if not local_dir.is_dir():
        return []
    reg_stems = {name[8:-4] for name in list_examples(component)}
    extras: list[tuple[str, str, str]] = []
    for path in sorted(local_dir.iterdir()):
        if not path.name.endswith(".tsx"):
            continue
        raw = path.stem
        stem = raw[len(component) + 1 :] if raw.startswith(f"{component}-") else raw
        if is_covered(stem, reg_stems, component):
            continue
        extras.append((f"./_examples/{raw}", to_pascal(raw), stem))
    return extras


def generate_page(
    component: str,
    example_files: list[str],
    extras: list[tuple[str, str, str]],
) -> str:
    has_rtl = any("rtl" in name for name in example_files) or any(
        "rtl" in stem for _, _, stem in extras
    )
    matrix = [item for item in extras if item[2] == "matrix"]
    other_extras = [item for item in extras if item[2] != "matrix"]

    lines: list[str] = []
    if has_rtl:
        lines.append(
            'import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";'
        )

    for rel, comp, _ in other_extras + matrix:
        lines.append(f'import {comp} from "{rel}";')

    imports: list[tuple[str, str, str]] = []
    for file_name in example_files:
        stem = file_name[8:-4]
        name = f"Example{to_pascal(stem)}"
        imports.append((stem, name, to_label(stem)))
        lines.append(
            f'import {name} from "@/registry/react/examples/{component}/{file_name[:-4]}";'
        )

    lines.append("")
    page_name = f"{to_pascal(component)}ExamplePage"
    if has_rtl:
        lines += [f"const {page_name} = () => (", "  <PreviewLocaleProvider>"]
        indent = "    "
    else:
        lines += [f"const {page_name} = () => ("]
        indent = "  "

    lines.append(
        f'{indent}<div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">'
    )
    lines.append(
        f'{indent}  <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">'
    )

    sections = list(imports)
    for _, comp, stem in other_extras:
        sections.append((f"local-{stem}", comp, to_label(stem)))
    for _, comp, stem in matrix:
        sections.append((f"local-{stem}", comp, to_label(stem)))

    for index, (stem, import_name, label) in enumerate(sections):
        heading_id = f"{stem}-heading"
        tag = "h1" if index == 0 else "h2"
        wide = "nested" in stem or stem == "local-matrix" or component == "sidebar"
        cls = "flex flex-col gap-5 sm:col-span-2" if wide else "flex flex-col gap-5"
        lines += [
            f"{indent}    <section",
            f'{indent}      aria-labelledby="{heading_id}"',
            f'{indent}      className="{cls}"',
            f"{indent}    >",
            f"{indent}      <{tag}",
            f'{indent}        className="text-muted-foreground font-medium"',
            f'{indent}        id="{heading_id}"',
            f"{indent}      >",
            f"{indent}        {label}",
            f"{indent}      </{tag}>",
            f'{indent}      <div className="{SHELL}">',
            f"{indent}        <{import_name} />",
            f"{indent}      </div>",
            f"{indent}    </section>",
        ]

    lines += [f"{indent}  </div>", f"{indent}</div>"]
    if has_rtl:
        lines.append("  </PreviewLocaleProvider>")
    lines += [");", "", f"export default {page_name};", ""]
    return "\n".join(lines)


def components_with_examples() -> list[str]:
    return sorted(
        path.name
        for path in EXAMPLES.iterdir()
        if path.is_dir() and list_examples(path.name)
    )


def main() -> None:
    written = 0
    for component in components_with_examples():
        files = list_examples(component)
        extras = local_extras(component)
        out_dir = VIEWS / component
        out_dir.mkdir(parents=True, exist_ok=True)
        (out_dir / "page.tsx").write_text(generate_page(component, files, extras))
        written += 1
        matrix_note = " +matrix" if any(stem == "matrix" for _, _, stem in extras) else ""
        print(f"{component}: {len(files)} examples, {len(extras)} extras{matrix_note}")
    print(f"Wrote {written} gallery pages")


if __name__ == "__main__":
    main()
