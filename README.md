# Generate Array

[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)
[![Test `generate-array` action](https://github.com/yakubique/generate-array/actions/workflows/test-myself.yaml/badge.svg)](https://github.com/yakubique/generate-array/actions/workflows/test-myself.yaml)


Generate JSON array of length


[Usage workflow](https://github.com/yakubique/generate-array/actions/workflows/test-myself.yaml)

## Usage
```yaml
- name: Generate Array
  id: list
  uses: yakubique/generate-array@v1.3
  with:
    length: 10
    startIndex: 1
    template: "$item-{{index}}"

# "["$item-1","$item-2","$item-3","$item-4","$item-5","$item-6","$item-7","$item-8","$item-9"]"
```

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|    INPUT     |  TYPE  | REQUIRED |  DEFAULT  |                                               DESCRIPTION                                                |
|--------------|--------|----------|-----------|----------------------------------------------------------------------------------------------------------|
|    length    | string |   true   |           |                                               Array length                                               |
| negativeOnly | string |  false   | `"false"` |                                       Return only negative values                                        |
| positiveOnly | string |  false   | `"false"` |                                       Return only positive values                                        |
|  startIndex  | string |  false   |   `"0"`   |                                 What should be first index (default: 0)                                  |
|   template   | string |  false   |           | By default array values are indexes, <br>can be customized with template. Example: <br>"item-{{index}}"  |
|   to_file    | string |  false   | `"false"` |                                           Save result to file                                            |

<!-- AUTO-DOC-INPUT:END -->




## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->

| OUTPUT |  TYPE  | DESCRIPTION  |
|--------|--------|--------------|
| result | string | Result array |

<!-- AUTO-DOC-OUTPUT:END -->



----

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S1UZ9P7)
