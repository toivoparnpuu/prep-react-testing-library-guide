import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Kalkulaator from './components/Kalkulaator'
import "@testing-library/jest-dom/extend-expect";

  afterEach(cleanup);
  
  it('kas on paneel on tühi', () => {
    const { getByTestId } = render(<Kalkulaator />); 
    
    //fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('paneel1')).toHaveTextContent('')
  });

it('kas on paneelil 1', () => {
    const { getByTestId } = render(<Kalkulaator />); 
    
    fireEvent.click(getByTestId('nupp1'))

    expect(getByTestId('paneel1')).toHaveTextContent('1')
  });

  it('kas on paneelil 12', () => {
    const { getByTestId } = render(<Kalkulaator />); 
    
    fireEvent.click(getByTestId('nupp1'))
    fireEvent.click(getByTestId('nupp2'))

    expect(getByTestId('paneel1')).toHaveTextContent('12')
  });

  it('kas on paneelil peale c vajutust 0', () => {
    const { getByTestId } = render(<Kalkulaator />); 
    
    fireEvent.click(getByTestId('nupp1'))
    fireEvent.click(getByTestId('nupp2'))
    fireEvent.click(getByTestId('nuppC'))

    expect(getByTestId('paneel1')).toHaveTextContent('')
  });

  it('kas 2+3 on 5', () => {
    const { getByTestId } = render(<Kalkulaator />); 
    
    fireEvent.click(getByTestId('nupp2'))
    fireEvent.click(getByTestId('nupppluss'))
    fireEvent.click(getByTestId('nupp3'))
    fireEvent.click(getByTestId('nuppvordus'))

    expect(getByTestId('paneel1')).toHaveTextContent('5')
  });
  it('kas 2-3 on -1', () => {
    const { getByTestId } = render(<Kalkulaator />); 
    
    fireEvent.click(getByTestId('nupp2'))
    fireEvent.click(getByTestId('nuppmiinus'))
    fireEvent.click(getByTestId('nupp3'))
    fireEvent.click(getByTestId('nuppvordus'))

    expect(getByTestId('paneel1')).toHaveTextContent('-1')
  });