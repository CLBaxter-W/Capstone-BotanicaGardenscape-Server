const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_shape = async () => {
  try {
    // shape
    await prisma.shape.deleteMany({});
    const shapes = [
      {
        id: uuid.v4(),
        shape_name: "Square",
        description: "4 sides",
        css_class: "square",
      },
      {
        id: uuid.v4(),
        shape_name: "Circle",
        description: "0 sides",
        css_class: "rounded-circle",
      },
      {
        id: uuid.v4(),
        shape_name: "Rectangle",
        description: "4 sides",
        css_class: "rectangle",
      },
    ];
    await prisma.shape.createMany({ data: shapes });
    console.log(shapes);

    return shapes;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_shape };
