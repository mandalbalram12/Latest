// actions.js
import { expect } from '@playwright/test';

//Click Action
export const customClick = async (element) => {
    await element.click();
  };
 //Type Action
  export const customType = async (element, text) => {
    await element.type(text);
  };

  //Fill action
  export const customFill = async (element, text) => {
    await element.fill(text);
  };
  
  //Clear Action
  export const customClear = async (element) => {
    await element.clear();
  };
  
  //Hover action
  export const customHover = async (element) => {
    await element.hover({TimeRanges:20000});
  };
  
  //Assertion for Visible
  export const customVisible = async (element) => {
    await expect(element).toBeVisible();
  };