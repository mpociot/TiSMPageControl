/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#import "TiUIView.h"
#import "SMPageControl.h"

@interface DeMarcelpociotSmpagecontrolScrollableView : TiUIView<UIScrollViewDelegate> {
@private
	UIScrollView *scrollview;
	SMPageControl *pageControl;
	int currentPage; // Duplicate some info, just in case we're not showing the page control
	BOOL showPageControl;
    NSArray *images;
    NSArray *currentImages;
    UIImage *pageIndicatorImage;
    UIImage *pageIndicatorMaskImage;
    UIImage *currentPageIndicatorImage;
	UIColor *pageControlBackgroundColor;
    UIColor *currentPageIndicatorTintColor;
    UIColor *pageIndicatorTintColor;
    NSUInteger pageControlAlignment;
    CGFloat pageControlMargin;
    CGFloat pageControlDiameter;
	CGFloat pageControlHeight;
    CGFloat pagingControlAlpha;
	BOOL handlingPageControlEvent;
    BOOL scrollingEnabled;
    BOOL pagingControlOnTop;
    BOOL overlayEnabled;
    // Have to correct for an apple goof; rotation stops scrolling, AND doesn't move to the next page.
    BOOL rotatedWhileScrolling;
    
    // See the code for why we need this...
    int lastPage;
    BOOL enforceCacheRecalculation;
    int cacheSize;
    
}

-(void)manageRotation;
-(UIScrollView*)scrollview;
-(void)setCurrentPage_:(id)page;
-(void)setScrollingEnabled_:(id)enabled;
-(void)refreshScrollView:(CGRect)visibleBounds readd:(BOOL)readd;
@end