import { Context, controller, provide, get, post, del, inject } from 'midway'
import { ICommentService } from '@services/comment/index'
@provide()
@controller('/comment')
export class CommentController {
    constructor() { }
    @inject()
    commentService: ICommentService

    @get('/list')
    async  index(ctx: Context) {
        const {goodId}=ctx.query
        ctx.body = await this.commentService.list(goodId)
    }
    @post('/add')
    async  add(ctx: Context) {
        const { body } = ctx.request
        ctx.body = await this.commentService.add(body)
    }
    @del('/:commentId')
    async  del(ctx: Context) {
        const { params } = ctx
        const {commentId}=params
        ctx.body = await this.commentService.del(commentId)
    }
}