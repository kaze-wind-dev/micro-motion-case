export function buildQueryString(queries: Record<string, unknown>): string {
    return new URLSearchParams(
        Object.entries(queries).reduce<Record<string, string>>(
            (acc, [key, value]) => {
                if (value === undefined || value === null) return acc;
                // fields, filtersが配列の場合はカンマ区切りに
                if (
                    (key === "fields" || key === "filters") &&
                    Array.isArray(value)
                ) {
                    acc[key] = value.join(",");
                } else if (typeof value === "object") {
                    // richEditorFormatなど、オブジェクト型はJSON文字列化
                    acc[key] = JSON.stringify(value);
                } else {
                    acc[key] = String(value);
                }
                return acc;
            },
            {}
        )
    ).toString();
}

export function dateFormat (date: string | Date, format?: string) {
  return new Date(date).toLocaleDateString("ja-JP").split("/").join(format);
};