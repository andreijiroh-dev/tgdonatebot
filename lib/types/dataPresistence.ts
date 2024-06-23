export interface InvoicePayload {
    invoice_id: string, // TODO: Validate if its UUID v4 here
    user: BigInt, // Telegram user ID here
    currency: "XTR", // only use Telegram Stars here
    amount: number,
    status: "pending" | "paid" | "refunded",
    created_at: string,
    updated_at?: string
}