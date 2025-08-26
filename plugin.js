const { Plugin } = window.Vencord;
const React = window.React;

class CuteCodePlugin extends Plugin {
    onStart() {
        console.log("CuteCodePlugin démarré !");
        this.injectSettings();
    }

    onStop() {
        console.log("CuteCodePlugin arrêté !");
    }

    injectSettings() {
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
                React.createElement(
                    "h3",
                    { style: { fontFamily: "Pangolin", color: "#925560" } },
                    "💻 Éditeur de code"
                ),
                React.createElement("textarea", {
                    style: {
                        width: "100%",
                        height: "200px",
                        fontFamily: "Consolas",
                        fontSize: "14px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "#F7DFFF",
                        border: "1px solid #925560",
                        borderRadius: "6px",
                        padding: "5px",
                        resize: "vertical",
                    },
                    value: code,
                    onChange: (e) => setCode(e.target.value),
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

        this.addSettingPanel("Cute Code", SettingsPanel);
    }
}

module.exports = CuteCodePlugin;