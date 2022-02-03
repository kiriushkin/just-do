/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags: [Categories]
 *     summary: Get categories' data.
 *     security:
 *       - bearerAuth: []
 *     description: Returns categories based on userId in token.
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: Categories array
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Work
 *                   icon:
 *                     type: string
 *                     example: work
 *                   createdAt:
 *                     type: date
 *                     example: 2022-01-20T16:42:53.489Z
 *                   updatedAt:
 *                     type: date
 *                     example: 2022-01-20T16:42:53.489Z
 *                   userId:
 *                     type: integer
 *                     example: 1
 *       401:
 *         description: Either token isn't passed or token is invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Authorization required.
 *                 error:
 *                   type: string
 *                   example: Token expired.
 *       500:
 *         description: Serverside error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something went wrong, try again.
 *   post:
 *     tags: [Categories]
 *     summary: Create new category.
 *     security:
 *       - bearerAuth: []
 *     description: Creates category based on sended body and authorization token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Education
 *               icon:
 *                 type: string
 *                 example: home
 *     responses:
 *       201:
 *         description: Created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category created.
 *                 data:
 *                   type: object
 *                   description: Created task
 *       401:
 *         description: Either token isn't passed or token is invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Authorization required.
 *       500:
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something went wrong, try again.
 *   put:
 *     tags: [Categories]
 *     summary: Update category.
 *     security:
 *       - bearerAuth: []
 *     description: Updates category based on sended body and authorization token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 required: true
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: Work
 *     responses:
 *       200:
 *         description: Updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category updated.
 *                 data:
 *                   type: object
 *                   description: Created task
 *       401:
 *         description: Either token isn't passed or token is invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Authorization required.
 *       500:
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something went wrong, try again.
 *   delete:
 *     tags: [Categories]
 *     summary: Delete category.
 *     security:
 *       - bearerAuth: []
 *     description: Deletes category based on task's id and authorization token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category deleted.
 *       401:
 *         description: Either token isn't passed or token is invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Authorization required.
 *       500:
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something went wrong, try again.
 */
