import Styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  typeButton: 'next' | 'back' | undefined;
}

export const Container = Styled.button<ContainerProps>`

      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      span {
        color: white;
      }


      ${props =>
        props.typeButton === 'next' &&
        css`
          background: #002f34;

          &:hover {
            background: ${shade(0.2, '#002f34')};
          }
        `}

        ${props =>
          props.typeButton === 'back' &&
          css`
            background: #c53030;

            &:hover {
              background: ${shade(0.2, '#c53030')};
            }
          `}
          ${props =>
            props.typeButton === undefined &&
            css`
              background: #002f34;

              &:hover {
                background: ${shade(0.2, '#002f34')};
              }
            `}

`;
