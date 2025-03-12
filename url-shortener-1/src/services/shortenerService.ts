// src/services/shortenerService.ts

import { Url } from '../models/url';
import { generateShortUrl } from '../utils/helpers';

export class ShortenerService {
    private urls: Url[] = [];

    public createShortUrl(originalUrl: string): Url {
        const id = this.urls.length + 1;
        const shortenedUrl = generateShortUrl(id);
        const newUrl = new Url(id, originalUrl, shortenedUrl);
        this.urls.push(newUrl);
        return newUrl;
    }

    public getOriginalUrl(shortenedUrl: string): string | null {
        const url = this.urls.find(url => url.shortenedUrl === shortenedUrl);
        return url ? url.originalUrl : null;
    }
}