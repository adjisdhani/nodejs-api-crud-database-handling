const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.siswa.createMany({
    data: [
      { nama: 'Budi Santoso', kelas: '12 IPA', umur: 17 },
      { nama: 'Ani Rahmawati', kelas: '11 IPS', umur: 16 },
      { nama: 'Joko Widodo', kelas: '10 IPA', umur: 15 },
    ],
  });

  console.log("Data dummy siswa berhasil ditambahkan!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
