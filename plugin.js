(() => {
    const React = window.React;
    const Vencord = window.Vencord;
    if (!React || !Vencord) return;

    class SpywarePlugin {
        constructor() {
            this.code = "";
        }

        start() {
            console.log("Spyware chargé via thème !");
            this.addPanel();
        }

        addPanel() {
            const SettingsPanel = () => {
                const [code, setCode] = React.useState("");

                const handleFileImport = (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = () => setCode(reader.result);
                        reader.readAsText(file);
                    }
                };

                return React.createElement(
                    "div",
                    { style: { padding: "10px" } },
                    React.createElement("h3", { style: { color: "#ff69b4", fontFamily: "Pangolin" } }, "💻 Spyware Editor"),
                    React.createElement("textarea", {
                        value: code,
                        onChange: (e) => setCode(e.target.value),
                        style: {
                            width: "100%",
                            height: "200px",
                            fontFamily: "Consolas",
                            fontSize: "14px",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            color: "#F7DFFF",
                            border: "1px solid #ff69b4",
                            borderRadius: "6px",
                            padding: "5px",
                        },
                        placeholder: "Écris ton code ici..."
                    }),
                    React.createElement("input", {
                        type: "file",
                        accept: ".txt,.js,.ts",
                        onChange: handleFileImport,
                        style: {
                            marginTop: "10px",
                            padding: "5px",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }
                    })
                );
            };

            // Injecter dans les paramètres Vencord (catégorie Plugins)
            if (Vencord.addSettingPanel) {
                Vencord.addSettingPanel("Spyware", SettingsPanel);
            }
        }
    }

    const spyware = new SpywarePlugin();
    spyware.start();
})();
