
export default function Search() {
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main className="search">
            <form onSubmit={handleSubmit}>
                <label className="label">Location</label>
                <input placeholder="Delhi" type="text"></input>
            </form>

        </main>
    )
}