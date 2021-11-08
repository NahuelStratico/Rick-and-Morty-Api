import React from 'react';
import Link, { LinkProps } from 'next/link';
import {
  makeStyles,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core';
import clsx from 'clsx';
import { Omit } from '@/common/CommonTypes';

const useStyles = makeStyles(() => ({
  anchor: {
    textDecoration: 'none',
  },
}));

export type NextLinkProps = React.PropsWithChildren<
  Omit<LinkProps, 'passHref'>
> &
  Pick<MuiLinkProps, 'className' | 'underline' | 'color'>;

const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  function NextLink(
    {
      children,
      href,
      prefetch,
      replace,
      scroll,
      shallow,
      underline = 'none',
      color = 'inherit',
      // To pass the any other props like "className" etc to anchor.
      className,
      ...rest
    },
    ref,
  ) {
    const classes = useStyles();

    return (
      <Link
        // If any other prop is passed to next/link,
        // it gives a propType warning.
        {...{ href, prefetch, replace, scroll, shallow }}
        // If the child of Link is a custom component that wraps an <a> tag, you must add passHref to Link.
        // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
        passHref={true}
      >
        <MuiLink
          ref={ref}
          className={clsx(
            classes.anchor,
            // Material UI passes classes sometimes.
            // So, we need "className" prop here.
            className,
          )}
          underline={underline}
          color={color}
          {...rest}
        >
          {children}
        </MuiLink>
      </Link>
    );
  },
);

export default NextLink;
