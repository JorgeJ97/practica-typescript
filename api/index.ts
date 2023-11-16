import { server } from "./src/app";
import conection from "./src/db"

const PORT = 3001

conection.conn.sync({ force:false}).then(() => {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`); 
      });

})
