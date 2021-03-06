import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';


function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
  return(
    <div>
      <Sparklines height={40} width={80} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      { average(props.data) } { props.units }  
    </div>
  );
}