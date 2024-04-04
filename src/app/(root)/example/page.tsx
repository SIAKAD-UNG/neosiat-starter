import ExampleComponent from "./_internal/components/example";
import ItemsComponent from "./_internal/components/items";
import CreateExample from "./_internal/forms/create-example";

export default function Page() {
    return (
        <main className="container mx-auto">
            <div className="py-4 text-lg font-semibold leading-4 text-black">Example Component</div>
            <div className="py-3">
                <ExampleComponent />
            </div>

            <div className="mb-4">
                <ItemsComponent />
            </div>

            <div className="p-4 rounded-xl bg-gray-100">
                <div className="py-4 text-lg font-semibold leading-4 text-black">Form Component</div>

                <div className="p-12 w-full max-w-3xl bg-white rounded-3xl">
                    <CreateExample />
                </div>
            </div>
        </main>
    )
}