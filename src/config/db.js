import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient({
    log:
        process.env.NODE_ENV === "development"
            ? ["query", "error","warn"]:
                ["error"],
});


const connectDb= async() =>{
    try{
        await prisma.$connect();
        console.log("Database connected successfully");
    }
    catch(error){
        console.error(`Error while connecting to databse: ${error.message}`);
        process.exit(1);
    }       
}

const disconnectDb= async() =>{
    try{
        await prisma.$disconnect();
        console.log("Database disconnected successfully");
    }catch(error){
        console.log(`Error while disconnecting to database: ${error.message}`);
    }
}

export {prisma, connectDb, disconnectDb};


