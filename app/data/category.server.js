import { prisma } from "./database.server";

export async function addCategory(categoryData) {
    try {
        return await prisma.category.create({
            data: {
                catName: categoryData.catName,
                catCode: categoryData.catCode
            }
        })
    } catch (error) {
        console.log(error);
        throw error;
    }

}

export async function getCategories() {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getCategory(id) {
    console.log(id)
    try {
        const category = await prisma.category.findFirst({ where: { id } });
        return category;
    } catch (error) {
        console.log(error);
        throw error;
    }
}