import React from 'react'
import Layout from './hoc/Layout/Layout'
import Libs from './containers/Libs/Libs'
// import Auth from './containers/Auth/Auth'
// import Categories from './containers/Categories/Categories'
// import Autors from './containers/Autors/Autors'
// import Books from './containers/Books/Books'
// import Manager from './containers/Manager/Manager'
import { Route, Switch } from 'react-router'

function App(){
  return (    
      <Layout>
        <Switch>
          <Route path="/" exact component={Libs}/>
          {/* <Route path="/auth"  component={Auth}/>
          <Route path="/categories"  component={Categories}/>
          <Route path="/autors"  component={Autors}/>
          <Route path="/books"  component={Books}/>
          <Route path="/admin"  component={Manager}/>           */}
          <Route render={()=><h1 style={{textAlign:'center',color:'red'}}>404 not found</h1>} />
        </Switch>
      </Layout>

  )
}

export default App;