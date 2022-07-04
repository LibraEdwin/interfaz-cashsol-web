import { endPoints } from './endPoints';

/**
 * Obtener todos los posts
 * @param {{
 *  limit?: number,
 *  page?: number,
 * } | undefined} param0
 *
 * @example getPosts() // retorna la pagina 1 con un limite de 10 posts
 * getPosts({limit: 5, page: 2}) // retorna la pagina 2 con un liminte de 5 posts
 *
 * @returns
 */
export const getPostList = ({ limit, page }) => {
  const uriGetAll = `${endPoints.posts.getPosts}?limit=${limit}&page=${page}`;

  return fetch(uriGetAll);
};

/**
 * Obtener un post por su ID
 * @param {string | number} idPost
 * @returns
 */
export const getPost = (idPost) => {
  return fetch(endPoints.posts.getPost(idPost));
};

/**
 * Crear un post
 * @param {object} post
 * @returns
 */
export const createPost = (post) => {
  return fetch(endPoints.posts.postPost, {
    method: 'POST',
    body: JSON.stringify(post)
  });
};
