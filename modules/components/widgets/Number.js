import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { InputNumber, Col } from 'antd';
import 'antd/lib/date-picker/style';
import {getFieldConfig} from '../../utils/configUtils';

export default class NumberWidget extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    delta: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    placeholder: PropTypes.string,
  };

  handleChange(val) {
    this.props.setValue(val);
  }

  static defaultProps = {
      min: undefined,
      max: undefined,
      step: undefined,
  };

  render() {
    const fieldDefinition = getFieldConfig(this.props.field, this.props.config);
    const fieldSettings = fieldDefinition.fieldSettings || {};
    const min = this.props.min != null ? this.props.min : fieldSettings.min;
    const max = this.props.max != null ? this.props.max : fieldSettings.max;
    const step = this.props.step != null ? this.props.step : fieldSettings.step;

    return (
      <Col>
        <InputNumber 
          key="widget-number"
          size={this.props.config.settings.renderSize || "small"}
          ref="num" 
          value={this.props.value || null} 
          min={min} 
          max={max} 
          step={step} 
          placeholder={this.props.placeholder} 
          onChange={this.handleChange.bind(this)} 
        />
      </Col>
    );
  }
}
