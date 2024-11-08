-- CreateTable
CREATE TABLE "adocoes" (
    "id" TEXT NOT NULL,
    "pet_id" TEXT NOT NULL,
    "adotante_id" TEXT NOT NULL,
    "data_adocao" DATE NOT NULL,

    CONSTRAINT "adocoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adotantes" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,

    CONSTRAINT "adotantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "especie" VARCHAR(50) NOT NULL,
    "idade" INTEGER NOT NULL,
    "descricao" TEXT,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adotantes_email_key" ON "adotantes"("email");

-- AddForeignKey
ALTER TABLE "adocoes" ADD CONSTRAINT "adocoes_adotante_id_fkey" FOREIGN KEY ("adotante_id") REFERENCES "adotantes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adocoes" ADD CONSTRAINT "adocoes_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
