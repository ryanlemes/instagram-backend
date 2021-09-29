import { PostDoc } from '../../models/interfaces/post';
import Post from '../../models/Post';
import { ServiceResponse, PostBody } from './interfaces/postServiceInterface';

function PostService() {
  /**
   * Returns a single object based on user id
   * @param id string that contains mongoose id
   * @returns and object with a single user
   */
  const findOne = async (id: string) => Post.findById(id);

  /**
   * Returns a list of Post's objects sorted by created At
   * @returns a list of post objects
   */
  const findAll = async () => Post.find().sort('-createdAt');

  /**
   * Create a new post
   * @param body Post body object that contains all
   * parameters to create a new Post
   * @returns the post object created
   */
  const createNew = async (body: PostBody): Promise<ServiceResponse> => {
    const post = await Post.create({
      author: body.author,
      place: body.place,
      description: body.description,
      hashtags: body.hashtags,
      image: body.image,
    });

    return {
      status: 200,
      message: undefined,
      data: post,
    };
  };

  /**
   * Update a post
   * @param id string that contains mongoose id
   * @param body Post body object that contains all
   * parameters to update the post
   * @returns the post object updated
   */
  const updateOne = async (id: string, body: PostBody): Promise<ServiceResponse> => {
    const post: PostDoc = await Post.findOne({ id }) as PostDoc;

    const update: any = {};
    if (post.author !== body.author) update.author = body.author;
    if (post.place !== body.place) update.place = body.place;
    if (post.description !== body.description) update.description = body.description;
    if (post.hashtags !== body.hashtags) update.hashtags = body.hashtags;
    if (post.image !== body.image) update.image = body.image;
    if (post.likes !== body.likes) update.likes = body.likes;

    await post?.updateOne(update);

    return {
      status: 200,
      message: undefined,
      data: post,
    };
  };

  /**
   * Remove some post based on id
   * @param id string that contains mongoose id
   * @returns a message if the post was removed
   */
  const deleteOne = async (id: string): Promise<ServiceResponse> => {
    const post = await findOne(id);
    post?.delete();

    return {
      status: 200,
      message: `post ${id} was removed`,
      data: undefined,
    };
  };

  return {
    findOne,
    findAll,
    createNew,
    updateOne,
    deleteOne,
  };
}

export default PostService;
