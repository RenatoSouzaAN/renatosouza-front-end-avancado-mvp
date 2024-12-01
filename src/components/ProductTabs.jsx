import { useState } from "react";

const ProductTabs = ({ product }) => {
    const [selectedTab, setSelectedTab] = useState("description");

    const tabs = [
        { id: "description", label: "Descrição" },
        { id: "specifications", label: "Especificações" },
        { id: "reviews", label: "Avaliações" },
    ];
    
    const parseText = (text) => {
        const elements = [];
        const tokens = text.split(/(\\[nbt])/);

        let isBold = false;
        let boldBuffer = "";

        tokens.forEach((token, index) => {
            if (token === "\\n") {
                if (isBold && boldBuffer) {
                    elements.push(<strong key={`${index}`}>{boldBuffer}</strong>);
                    boldBuffer = "";
                }
                elements.push(<br key={index} />);
            } else if (token === "\\b") {
                if (isBold && boldBuffer) {
                    elements.push(<strong key={`${index}`}>{boldBuffer}</strong>);
                    boldBuffer = "";
                }
                isBold = !isBold;
            } else if (token === "\\t") {
                if (isBold && boldBuffer) {
                    elements.push(<strong key={`${index}`}>{boldBuffer}</strong>);
                    boldBuffer = "";
                }
                elements.push(
                    <span
                        key={index}
                        style={{ display: "inline-block", width: "2em" }}
                    >
                        &nbsp;
                    </span>
                );
            } else {
                if (isBold) {
                    boldBuffer += token;
                } else {
                    elements.push(token);
                }
            }
        });

        if (isBold && boldBuffer) {
            elements.push(<strong key={"final-bold"}>{boldBuffer}</strong>);
        }

        return elements;
    }

    const renderTabContent = () => {
        switch (selectedTab) {
            case "description":
                return (
                    <div className="prose">
                        <p className="text-primary text-justify">
                            {parseText(product.description)}
                        </p>
                    </div>
                );
            case "specifications":
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {product.specifications.map((specification, index) => (
                            <div
                                key={index}
                                className="p-3 border rounded-lg shadow-md"
                            >
                                <h3 className="font-semibold mb-1 text-primary">
                                    {specification.title}
                                </h3>
                                <p className="text-primary">
                                    {specification.info}
                                </p>
                            </div>
                        ))}
                    </div>
                );
            case "reviews":
                return (
                    <div className="flex justify-center">
                        <p className="text-primary">
                            Nenhuma avaliação para este produto, experimente
                            adicionar uma.
                        </p>
                    </div>
                );
        }
    };

    return (
        <section className="mt-10">
            <div className="border-b mb-6">
                <div className="flex gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`px-4 py-2 transition-colors duration-200 ${
                                selectedTab === tab.id
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-primary"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-6">{renderTabContent()}</div>
        </section>
    );
};

export default ProductTabs;
