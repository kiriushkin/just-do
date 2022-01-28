/**
 * @swagger
 * /api/images/{imageName}:
 *   get:
 *     tags: [Images]
 *     summary: Get user's image by image name.
 *     parameters:
 *       - in: path
 *         name: imageName
 *         required: true
 *         schema:
 *           type: string
 *           example: 58115cb4c0ce354af05e2ddd3551deae
 *         description: Image name.
 *     responses:
 *       200:
 *         description: Image.
 */
