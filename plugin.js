/**
 * @name Spyware
 * @author Toi
 * @version 1.0.0
 * @description Plugin Vencord : ajoute un éditeur de code dans la catégorie Spyware
 */

const { Plugin } = window.Vencord;
const React = window.React;

class Spyware extends Plugin {
    onStart() {
        console.log("Spyware démarré !");
        this.addSpywareSettings();
    }

    onStop() {
        console.log("Spyware arrêté !");
    }

    addSpywareSettings() {
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
                { style: { padding: "10px" } },
                React.createElement(
                    "h3",
                    { style: { fontFamily: "Pangolin", color: "#ff69b4" } },
                    "💻 Spyware Editor"
                ),
                React.createElement("textarea", {
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

        // Ajoute la section Spyware dans la catégorie Vencord
        this.addSettingPanel("Spyware", SpywarePanel);
    }
}

module.exports = Spyware;
