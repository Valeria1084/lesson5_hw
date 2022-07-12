import logo from './logo.svg';
import {Route, Routes} from "react-router";

import {MainLayout} from "./components/layouts/MainLayout";
import {TodosPagets} from "./pagets/TodosPagets";
import {AlbumsPagets} from "./pagets/AlbumsPagets";
import {CommentsPagets} from "./pagets/CommentsPagets";
import {PostsComponent} from "./components/posts/PostsComponent";


function App() {
  return (
    <div >
<Routes>
  <Route  path ={'/'} element={<MainLayout/>}>
    <Route  path ={'todos'} element={<TodosPagets/>}/>
    <Route path ={'albums'} element={<AlbumsPagets/>}/>
    <Route  path ={'comments'} element={<CommentsPagets/>}/>
    <Route path ={':postId'} element={<PostsComponent/>}/>
  </Route>
</Routes>
    </div>
  );
}

export default App;
