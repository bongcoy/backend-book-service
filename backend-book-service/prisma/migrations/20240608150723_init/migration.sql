-- CreateTable
CREATE TABLE "members" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "penaltyEndDate" TIMESTAMP(3),

    CONSTRAINT "members_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "books" (
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "borrows" (
    "id" SERIAL NOT NULL,
    "memberCode" TEXT NOT NULL,
    "bookCode" TEXT NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3),

    CONSTRAINT "borrows_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "members_code_key" ON "members"("code");

-- CreateIndex
CREATE UNIQUE INDEX "books_code_key" ON "books"("code");

-- CreateIndex
CREATE UNIQUE INDEX "borrows_memberCode_bookCode_borrowDate_key" ON "borrows"("memberCode", "bookCode", "borrowDate");

-- AddForeignKey
ALTER TABLE "borrows" ADD CONSTRAINT "borrows_memberCode_fkey" FOREIGN KEY ("memberCode") REFERENCES "members"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrows" ADD CONSTRAINT "borrows_bookCode_fkey" FOREIGN KEY ("bookCode") REFERENCES "books"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
