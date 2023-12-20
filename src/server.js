import app from "./app.js";
import { envs } from "./config/enviroments/enviroments.js";

async function main() {
    try {
        //por si deseas inicializar una bd
    } catch (error) {
        console.error(error);
    }
}

main();

app.listen(envs.PORT, () => {
    console.log(`Server running on port ${envs.PORT}`);
});
