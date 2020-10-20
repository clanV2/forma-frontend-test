import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './model/article';
import { delay } from "rxjs/operators";

@Injectable()
export class FormaApiService {

    getArticles(): Observable<Article[]> {
        const articles: any[] = [
            {
                id: "1",
                url: "https://www.bing.com/search?q=first%20article",
                author: "Linh Phan",
                publishedAt: "2019-01-04T16:00:00.000Z",
                title: "Feature Highlight: Planning Module",
                type: "FEATURED",
                featureImgUrl: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
            },
            {
                id: "2",
                url: "https://www.bing.com/search?q=second%20article",
                author: "Rhocela Pasigna",
                publishedAt: "2018-12-06T16:00:00.000Z",
                title: "Feature Highlight: Cash on Delivery (COD)",
                type: "NORMAL",
                description: `<p><span><span style="font-weight:bold;"><span>COD is here to stay</span></span></span><br>
                <span><span>In our engagements with enterprises across Asia, we find that COD remains a preferred payment method by many enterprise customers. In between pre-payment risks, late credit payments, online security concerns, or just the convenience and familiarity...</span></span></p>`,
            },
            {
                id: "3",
                url: "https://www.bing.com/search?q=third%20article",
                author: "Rhocela Pasigna",
                publishedAt: "2018-11-16T16:00:00.000Z",
                title: "Forma Goes Live in Vietnam!",
                type: "NORMAL",
                description: `<div><p><span><span style="font-style:italic;">Innovation meets tradition as Forma goes live in Vietnam! Our customer has thoughtfully prepared this offering as they officially start their journey to digitization through our platform today.</span></span></p><p><span>Amidst a busy year-end with a full feature roadmap in our hands, our team a...</span></p></div>`,
            },
            {
                id: "4",
                url: "https://www.bing.com/search?q=4%20article",
                author: "Rhocela Pasigna",
                publishedAt: "2018-07-03T16:00:00.000Z",
                title: "Microsoft and Forma Partner to Transform the Logistics Industry",
                type: "NORMAL",
                description: `<p style="font-size: 16px; text-align: justify;"><span style="font-size: 16px;"><span style="font-weight: bold;">SINGAPORE</span> – Microsoft and Forma today announced the availability of Forma Enterprise on Microsoft Azure, allowing enterprises to fully digitize their logistics processes while achieving infrastructure compliance and utmost security.</span></p>`,
            }
        ];

        return of(articles).pipe(delay(1000));
    }
}