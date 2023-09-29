-- CreateEnum
CREATE TYPE "DietType" AS ENUM ('MORNING', 'LUNCH', 'DINNER', 'SNACK');

-- CreateTable
CREATE TABLE "Users" (
    "user_id" VARCHAR(256) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Accounts" (
    "user_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goals" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Goals_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "BodyRecords" (
    "user_id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ExerciseRecords" (
    "user_id" TEXT NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "timeCount" INTEGER NOT NULL,
    "calorie" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ExerciseRecords_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Diaries" (
    "user_id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "contents" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Diets" (
    "user_id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "type" "DietType" NOT NULL,
    "date_time" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Diets_pkey" PRIMARY KEY ("user_id","date_time","type")
);

-- CreateTable
CREATE TABLE "Columns" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Columns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColumnTags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ColumnTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ColumnToColumnTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercises_name_key" ON "Exercises"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BodyRecords_user_id_date_key" ON "BodyRecords"("user_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseRecords_user_id_date_key" ON "ExerciseRecords"("user_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Diaries_user_id_date_key" ON "Diaries"("user_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "_ColumnToColumnTag_AB_unique" ON "_ColumnToColumnTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ColumnToColumnTag_B_index" ON "_ColumnToColumnTag"("B");

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BodyRecords" ADD CONSTRAINT "BodyRecords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseRecords" ADD CONSTRAINT "ExerciseRecords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseRecords" ADD CONSTRAINT "ExerciseRecords_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diaries" ADD CONSTRAINT "Diaries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diets" ADD CONSTRAINT "Diets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColumnToColumnTag" ADD CONSTRAINT "_ColumnToColumnTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Columns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColumnToColumnTag" ADD CONSTRAINT "_ColumnToColumnTag_B_fkey" FOREIGN KEY ("B") REFERENCES "ColumnTags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
