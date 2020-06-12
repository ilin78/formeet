import React from 'react';
import { render } from '@testing-library/react';
import App, {sum} from './App';

describe('Lodash: app', () => {
  test('renders link profile', () => {
    const { getByText} = render(<App />);
    const linkElement = getByText(/Профиль/i);
    expect(linkElement).toBeInTheDocument();
  })
  
  test('renders link tasks', () => {
    const { getByText} = render(<App />);
    const linkElement = getByText(/Задания/i);
    expect(linkElement).toBeInTheDocument();
  })
  test('renders link materials', () => {
    const { getByText} = render(<App />);
    const linkElement = getByText(/Материалы/i);
    expect(linkElement).toBeInTheDocument();
  })
  test('renders link notice', () => { 
    const { getByText } = render(<App />);
    const linkElement = getByText(/Объявления/i);
    expect(linkElement).toBeInTheDocument();
  })
  test('renders link disciplines', () => {
    const { getByText} = render(<App />);
    const linkElement = getByText(/Дисциплины/i);
    expect(linkElement).toBeInTheDocument();
  })
  test('renders link settings', () => { 
    const { getByText} = render(<App />);
    const linkElement = getByText(/Настройки/i);
    expect(linkElement).toBeInTheDocument();
  })
  test('renders link exit', () => {
    const { getByText} = render(<App />);
    const linkElement = getByText(/Выход/i);
    expect(linkElement).toBeInTheDocument();
  })
})



