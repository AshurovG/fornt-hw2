import * as React from 'react'
import "./Text.css"

export type TextProps = {
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?:  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
};

// -webkit-line-clamp: 2;
//     line-clamp: 2;
const Text: React.FC<TextProps> = ({ className, view, tag, weight, children, color, maxLines }) => {
    let classes: string = ''
    let styles = {
        color: color,
        weight: weight
    }
    // if (view = 'title') {
    //         const elements: any = document.getElementsByClassName('title');
    //         if (elements) {
    //             for (var i = 0; i < elements.length; i++) {
    //                 elements[i].style.webkitLineClamp = maxLines;
    //                 elements[i].style.lineClamp = maxLines;
                    
    //               }
    //         }
            
    // }
    if (className) {
        classes += className
    }

    if (view === 'title') {
        if (maxLines === 1) {
            classes += ` title_max1`
        } else if (maxLines === 2) {
            classes += ` title_max2`
        } else if (maxLines === 3) {
            classes += ` title_max3`
        }
        
    }

    if(view) {
        if (classes.length === 0) {
            classes += view
        } else {
            classes += ` ${view}`
        }
    }

    switch (tag) {
        case 'h1':
            return (
                <h1 data-testid="text" className={classes} style={styles}>{children}</h1>
            )
        case 'h2':
            return (
                <h2 data-testid="text" className={classes} style={styles}>{children}</h2>
            )
        case 'h3':
            return (
                <h3 data-testid="text" className={classes} style={styles}>{children}</h3>
            )
        case 'h4':
            return (
                <h4 data-testid="text" className={classes} style={styles}>{children}</h4>
            )
        case 'h5':
            return (
                <h5 data-testid="text" className={classes} style={styles}>{children}</h5>
            )
        case 'h6':
            return (
                <h6 data-testid="text" className={classes} style={styles}>{children}</h6>
            )
        case 'div':
            return (
                <div data-testid="text" className={classes} style={styles}>{children}</div>
            )
        case 'span':
            return (
                <span data-testid="text" className={classes} style={styles}>{children}</span>
            )
        case 'p':
            return (
                <p data-testid="text" className={classes} style={styles}>{children}</p>
            )
        default:
            return (
                <p data-testid="text" className={classes} style={{color: 'inherit'}}>
                    {children}
                </p>
            )
      }
}

export default Text;
