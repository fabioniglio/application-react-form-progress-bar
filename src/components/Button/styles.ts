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
      max-width:670px;
      font-weight: 500;
      margin:24px 12px;

      transition: background-color 0.2s, border 0.2s;


      ${props =>
        props.typeButton === 'next' &&
        css`
          background: #002f34;

          span {
            color: #fff;
            font-weight: bold;
          }

          &:hover {
            background: ${shade(0.2, '#002f34')};
          }
        `}

        ${props =>
          props.typeButton === 'back' &&
          css`
            background: #fff;
            border: 3px solid #002f34;

            span {
              color: #002f34;
              font-weight: bold;
            }

            &:hover {
              border: 6px solid #002f34;
              transition: border 0.5s;
            }
          `}
          ${props =>
            props.typeButton === undefined &&
            css`
              background: #002f34;

              span {
                color: #fff;
                font-weight: bold;
              }

              &:hover {
                background: ${shade(0.2, '#002f34')};
              }
            `}

`;
