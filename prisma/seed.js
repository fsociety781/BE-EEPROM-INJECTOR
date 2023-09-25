const prisma = require('../bin/prisma')

async function main(){
    const feeder = await prisma.feeders.createMany({
        data:[
            {
                barcode: "FD-9D-8S-C0",
                name: "Feeder 1",
                token: "ao87DGAS8jausdh1",
                uuid: "81273918742918-9090-asda-ihadagff",
                jwt: "ey938yr7egfudfisgfsdif",
                type: "FISH",
                version: "V.1.0",
              },
              {
                barcode: "FD-9D-8S-C8",
                name: "Feeder 2",
                token: "ao87DGAS8jausdh6",
                uuid: "81273918742918-9090-asda-ihadagfa",
                jwt: "ey938yr7egfudfisgfsdif",
                type: "FISH",
                version: "V.2.0.",
              },
              {
                barcode: "FD-9D-8S-C1",
                name: "Feeder 3",
                token: "ao87DGAS8jausdh2",
                uuid: "81273918742918-9090-asda-ihadagfb",
                jwt: "ey938yr7egfudfisgfsdif",
                type: "FISH",
                version: "V.2.0",
              },
              {
                barcode: "FD-9D-8S-C2",
                name: "Feeder 4",
                token: "ao87DGAS8jausdh3",
                uuid: "81273918742918-9090-asda-ihadagfc",
                jwt: "ey938yr7egfudfisgfsdif",
                type: "FISH",
                version: "V.3.0",
              },
              {
                barcode: "FD-9D-8S-C3",
                name: "Feeder 5",
                token: "ao87DGAS8jausdh9",
                uuid: "81273918742918-9090-asda-ihadagff",
                jwt: "ey938yr7egfudfisgfsdif",
                type: "FISH",
                version: "V.5.0",
              },
        ]

    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })