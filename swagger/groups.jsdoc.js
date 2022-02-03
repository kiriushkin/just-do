/**
 * @swagger
 * /api/groups:
 *   get:
 *     tags: [Groups]
 *     summary: Get groups' data.
 *     security:
 *       - bearerAuth: []
 *     description: Returns groups based on userId in token.
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: Groups array
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
 *                     example: Sunday
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
 *     tags: [Groups]
 *     summary: Create new group.
 *     security:
 *       - bearerAuth: []
 *     description: Creates group based on sended body and authorization token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sunday
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
 *                   example: Group created.
 *                 data:
 *                   type: object
 *                   description: Created group
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
 *     tags: [Groups]
 *     summary: Update group.
 *     security:
 *       - bearerAuth: []
 *     description: Updates group based on sended body and authorization token.
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
 *                 example: Monday
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
 *                   example: Group updated.
 *                 data:
 *                   type: object
 *                   description: Updated group
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
 *     tags: [Groups]
 *     summary: Delete group.
 *     security:
 *       - bearerAuth: []
 *     description: Deletes group based on task's id and authorization token.
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
 *                   example: Group deleted.
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
