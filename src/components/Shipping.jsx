import { useNotification } from "@/contexts/NotificationContext";


const Shipping = () => {

    const { addNotification } = useNotification();

    const handleCalculateShipping = () => {
        addNotification("Essa funcionalidade ainda não está implementada",
            "warning");
    }

    return (
        <div className="flex flex-col gap-3">
            <label className="block text-primary font-medium">
                Calcular frete e prazo de entrega:
            </label>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Digite seu CEP"
                    className="flex-1 px-3 py-2 border rounded-lg"
                />
                <button onClick={handleCalculateShipping} className="px-4 py-2 bg-primary text-white rounded-lg">
                    Calcular
                </button>
            </div>
        </div>
    );
};

export default Shipping;
