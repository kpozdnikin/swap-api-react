import type { ErrorInfo, ReactNode } from 'react';
import React, { Component } from 'react';
import { Stack, Typography } from '@mui/material';

interface ErrorBoundaryState {
    hasError: boolean;
}

// If your ErrorBoundary takes specific props, define them in an interface
interface ErrorBoundaryProps {
    children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Render any custom fallback UI
            return (
                <Stack>
                    <Typography>Something went wrong.</Typography>
                </Stack>
            );
        }

        return children;
    }
}
