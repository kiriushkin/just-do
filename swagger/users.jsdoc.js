/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Get user's data.
 *     security:
 *       - bearerAuth: []
 *     description: Returns a single user based on their JWT.
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: example@foo.bar
 *                 firstName:
 *                   type: string
 *                   example: Jane
 *                 lastName:
 *                   type: string
 *                   example: Doe
 *                 avatarUrl:
 *                   type: string
 *                   example: images/e7b40df52ca9d2adbe08b8c8d753bffe
 *       400:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found.
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
 *         description: Serverside error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something went wrong, try again.
 */
