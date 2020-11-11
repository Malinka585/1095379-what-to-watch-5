import React, {PureComponent} from "react";
import {TabsHeaders} from "../../const";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.onTabClickHandle = this.onTabClickHandle.bind(this);

      this.state = {
        activeTab: TabsHeaders.OVERVIEW
      };
    }

    onTabClickHandle(value) {
      this.setState({activeTab: value});
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onTabClick={this.onTabClickHandle}
        />
      );
    }
  }

  return WithTabs;
};

export default withTabs;
