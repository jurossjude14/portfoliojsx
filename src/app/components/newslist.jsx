'use client';

import React, { useState, useEffect } from 'react';
import { ScanQrCode } from "lucide-react"
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import useGetAllSamples from '../hooks/resthookcustom';
import { Skeleton } from "@/components/ui/skeleton"


const Newslist = () => {

  const dateconvert = (value) => {
    const date = new Date(value);
    const shortDateTime = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    return shortDateTime;
  }

  const { data: articles, isLoading, isError, error, refetch } = useGetAllSamples();


  if (isLoading) {
    return (
      <>
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-1">
          <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold heading block-set">
              Web / WP Top Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Here are 3 of the most recent or popular articles about web development or WordPress news.
            </p>
          </CardContent>
            <CardContent>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <Skeleton className="w-[auto] h-[300px]" />
              <Skeleton className="w-[auto] h-[300px]" />
              <Skeleton className="w-[auto] h-[300px]" />
            </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-1">
        <Card x-chunk="dashboard-01-chunk-0">

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold heading block-set">
              Web / WP Top Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Here are 3 of the most recent or popular articles about web development or WordPress news.
            </p>
          </CardContent>

          <CardContent>
            {error ? (
              <div>Error: {error.message}</div>
            ) : (
              articles?.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                  {articles.map((article) => (
                    <div key={article.uuid} className="child-news">
                      <div className="box-icon">
                        <ScanQrCode className="h-20 w-20" />
                      </div>
                      <h3>{article.title}</h3>
                      <span className='date-published'>{dateconvert(article.published_at)}</span>
                      <p className='text-sm text-muted-foreground'>{article.description}</p>
                      <Button variant="outline">
                        <Link href={article.url} target="_blank">
                          Read Article
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No articles found.</p>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Newslist
