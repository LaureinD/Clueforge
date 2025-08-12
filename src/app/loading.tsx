export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[var(--color-background)]">
            <div className="flex flex-col items-center gap-4">
                <div
                    className="w-12 h-12 border-4 border-[var(--color-accent-light)] border-t-[var(--color-accent)] rounded-full animate-spin"
                    aria-label="Loading spinner"
                />
                <p className="text-[var(--color-text-primary)] text-lg font-semibold select-none">
                    Loading...
                </p>
            </div>
        </div>
    );
}
