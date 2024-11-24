const store = new Vuex.Store({
    state: {
        posts: {
            post0: {
                accountImage: "https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg",
                date: "oct 29, 2022",
                postImage: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
                postText: "text0",
                likes: 0,
            },
            post1: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 28, 2022",
                postImage: null,
                postText: "text1",
                likes: 0,
            },
            post2: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 27, 2022",
                postImage: null,
                postText: "text2",
                likes: 0,
            },
            post3: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 26, 2022",
                postImage: null,
                postText: "text3",
                likes: 0,
            },
            post4: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 25, 2022",
                postImage: null,
                postText: "text4",
                likes: 0,
            },
            post5: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 24, 2022",
                postImage: null,
                postText: "text5",
                likes: 0,
            },
            post6: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 23, 2022",
                postImage: null,
                postText: "text6",
                likes: 0,
            },
            post7: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 22, 2022",
                postImage: null,
                postText: "text7",
                likes: 0,
            },
            post8: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 21, 2022",
                postImage: null,
                postText: "text8",
                likes: 0,
            },
            post9: {
                accountImage: "https://i.pinimg.com/474x/56/c5/29/56c529e5314666bbb71b8cd468c01f78.jpg",
                date: "oct 20, 2022",
                postImage: null,
                postText: "text9",
                likes: 0,
            }
        },
    },
    mutations: {
        // Generic update for post
        updatePost(state, { postId, postData }) {
            if (state.posts[postId]) {
                state.posts[postId] = { ...state.posts[postId], ...postData };
            }
        },
        // Increment likes for a specific post
        incrementLikes(state, postId) {
            if (state.posts[postId]) {
                state.posts[postId].likes += 1;
            }
        },
        // Decrement likes for a specific post
        decrementLikes(state, postId) {
            if (state.posts[postId] && state.posts[postId].likes > 0) {
                state.posts[postId].likes -= 1;
            }
        },
    },
    actions: {
        // Generic update for post
        updatePost({ commit }, payload) {
            commit('updatePost', payload);
        },
        // Actions for likes
        likePost({ commit }, postId) {
            commit('incrementLikes', postId);
        },
        unlikePost({ commit }, postId) {
            commit('decrementLikes', postId);
        },
    },
    getters: {
        getPost: (state) => (postId) => state.posts[postId],
        getAllPosts: (state) => state.posts,
    },
});

export default store;