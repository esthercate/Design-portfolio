declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}

type GtagEventParams = Record<string, string | number | boolean | undefined>;

export const trackEvent = (eventName: string, params?: GtagEventParams) => {
	if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
		return;
	}

	window.gtag('event', eventName, params);
};
