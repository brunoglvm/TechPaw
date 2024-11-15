-- DropForeignKey
ALTER TABLE "adocoes" DROP CONSTRAINT "adocoes_adotante_id_fkey";

-- DropForeignKey
ALTER TABLE "adocoes" DROP CONSTRAINT "adocoes_pet_id_fkey";

-- AddForeignKey
ALTER TABLE "adocoes" ADD CONSTRAINT "adocoes_adotante_id_fkey" FOREIGN KEY ("adotante_id") REFERENCES "adotantes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "adocoes" ADD CONSTRAINT "adocoes_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
