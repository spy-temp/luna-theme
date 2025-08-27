/**
 * @name Spyware
 * @author Toi
 * @version 1.0.0
 * @description Plugin Vencord : éditeur de code intégré pour Spyware
 */

const { Plugin } = window.Vencord;
const React = window.React;

class Spyware extends Plugin {
    onStart() {
        console.log("Spyware démarré !");
        this.injectSettings();
    }

    onStop() {
        console.log("Spyware arrêté !");
    }

    injectSettings() {
        const SpywarePanel = () => {
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
                { style: { padding: "10px", backgroundColor: "rgba(255,192,203,0.05)", borderRadius: "10px" } },
                React.createElement(
                    "h3",
                    { style: { fontFamily: "Pangolin", color: "#ff69b4", marginBottom: "10px" } },
                    "💻 Spyware Editor"
                ),
                React.createElement("textarea", {
                    value: code,
                    onChange: (e) => setCode(e.target.value),
                    placeholder: "Écris ton code ici...",
                    style: {
                        width: "100%",
                        height: "200px",
                        fontFamily: "Consolas",
                        fontSize: "14px",
                        backgroundColor: "rgba(255,182,193,0.2)",
                        color: "#fff",
                        border: "1px solid #ff69b4",
                        borderRadius: "6px",
                        padding: "5px",
                        resize: "vertical",
                        outline: "none",
                    }
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
                        backgroundColor: "#ffb6c1",
                        border: "none",
                        color: "white",
                        fontWeight: "bold",
                    }
                })
            );
        };

        // Ajoute la section Spyware dans Vencord
        this.addSettingPanel("Spyware", SpywarePanel);
    }
}

module.exports = Spyware;
