import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Protato Guide"

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 600,
                        color: "#3b82f6",
                        marginBottom: 20,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                    }}
                >
                    Protato Guide
                </div>
                <div
                    style={{
                        fontSize: 56,
                        fontWeight: 700,
                        color: "#fafafa",
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    )
}
