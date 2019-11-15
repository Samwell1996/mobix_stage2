import React, {Fragment, useState} from 'react';
import { observer } from "mobx-react";
import './App.css';
import { NavBar, MenuToggle } from './components';
import DetailTask from './Pages/DetailsTask/DetailTask';
import { rootStore as store } from "./store/RootStore";

function App() {
    const [isGroup, setGroup] = useState(0);
    const groupDetails = store.groups.list[isGroup];


  return (
      <Fragment>
        <NavBar/>
        <MenuToggle
            isGroup={isGroup}
            setGroup={setGroup}
        />
        <DetailTask
            isGroup={isGroup || 0}
            setGroup={setGroup}
            groupDetails={groupDetails}
        />
      </Fragment>

  );
}

export default observer(App);
