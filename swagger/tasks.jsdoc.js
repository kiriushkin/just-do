/**
 * @swagger
 * /api/tasks?id=1:
 *   get:
 *     tags: [Tasks]
 *     summary: Get task data.
 *     security:
 *       - bearerAuth: []
 *     description: Returns tasks based on userId in token.
 *     parameters:
 *      - in: query
 *        name: id
 *        schema:
 *          type: string
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: Tasks array
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Do laundry
 *                 description:
 *                   type: string
 *                   example: I need to do my laundry
 *                 deadline:
 *                   type: date
 *                   example: 2022-01-20T21:00:00.000Z
 *                 tags:
 *                   type: string
 *                   example: choirs, laundry
 *                 remindIn:
 *                   type: time
 *                   example: 01:00:00
 *                 priority:
 *                   type: string
 *                   example: neutral
 *                 createdAt:
 *                   type: date
 *                   example: 2022-01-20T16:42:53.489Z
 *                 updatedAt:
 *                   type: date
 *                   example: 2022-01-20T16:42:53.489Z
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 categoryId:
 *                   type: integer
 *                   example: 1
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
 * /api/tasks?ids=1,2,3:
 *   get:
 *     tags: [Tasks]
 *     summary: Get task's data.
 *     security:
 *       - bearerAuth: []
 *     description: Returns tasks based on userId in token.
 *     parameters:
 *      - in: query
 *        name: ids
 *        schema:
 *          type: string
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: Tasks array
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
 *                     example: Do laundry
 *                   description:
 *                     type: string
 *                     example: I need to do my laundry
 *                   deadline:
 *                     type: date
 *                     example: 2022-01-20T21:00:00.000Z
 *                   tags:
 *                     type: string
 *                     example: choirs, laundry
 *                   remindIn:
 *                     type: time
 *                     example: 01:00:00
 *                   priority:
 *                     type: string
 *                     example: neutral
 *                   createdAt:
 *                     type: date
 *                     example: 2022-01-20T16:42:53.489Z
 *                   updatedAt:
 *                     type: date
 *                     example: 2022-01-20T16:42:53.489Z
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   categoryId:
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
 * /api/tasks:
 *   get:
 *     tags: [Tasks]
 *     summary: Get task's data.
 *     security:
 *       - bearerAuth: []
 *     description: Returns tasks based on userId in token.
 *     parameters:
 *      - in: query
 *        name: offset
 *        schema:
 *          type: integer
 *        description: The number of items to skip before starting to collect the result set
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: Tasks array
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
 *                     example: Do laundry
 *                   description:
 *                     type: string
 *                     example: I need to do my laundry
 *                   deadline:
 *                     type: date
 *                     example: 2022-01-20T21:00:00.000Z
 *                   tags:
 *                     type: string
 *                     example: choirs, laundry
 *                   remindIn:
 *                     type: time
 *                     example: 01:00:00
 *                   priority:
 *                     type: string
 *                     example: neutral
 *                   createdAt:
 *                     type: date
 *                     example: 2022-01-20T16:42:53.489Z
 *                   updatedAt:
 *                     type: date
 *                     example: 2022-01-20T16:42:53.489Z
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   categoryId:
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
 *     tags: [Tasks]
 *     summary: Create new task.
 *     security:
 *       - bearerAuth: []
 *     description: Creates task based on sended body and authorization token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Do laundry
 *               description:
 *                 type: string
 *                 example: I need to do my laundry
 *               status:
 *                 type: string
 *                 example: queued
 *               deadline:
 *                 type: date
 *                 example: 2022-01-20T21:00:00.000Z
 *               category:
 *                 type: string
 *                 example: Choirs
 *               tags:
 *                 type: string
 *                 example: choirs, laundry
 *               remindIn:
 *                 type: time
 *                 example: 01:00:00
 *               priority:
 *                 type: string
 *                 example: neutral
 *               categoryId:
 *                 type: integer
 *                 example: 1
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
 *                   example: Task created.
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
 *     tags: [Tasks]
 *     summary: Update task.
 *     security:
 *       - bearerAuth: []
 *     description: Updates task based on sended body and authorization token.
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
 *               deadline:
 *                 type: date
 *                 example: 2022-01-20T21:00:00.000Z
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
 *                   example: Task updated.
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
 *     tags: [Tasks]
 *     summary: Delete task.
 *     security:
 *       - bearerAuth: []
 *     description: Deletes task based on task's id and authorization token.
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
 *                   example: Task deleted.
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
